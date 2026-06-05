using SmartLGU.Application.Residents.Commands.RegisterResident;
using SmartLGU.Application.Residents.Dtos;
using SmartLGU.Application.Residents.Services;
using SmartLGU.Domain.Enums;

namespace SmartLGU.Infrastructure.Residents;

public class MockResidentDataProvider : IResidentDataProvider
{
    private static readonly List<ResidentDto> Residents =
    [
        new ResidentDto
        {
            Id = 1,
            ResidentNumber = "RSD-2026-0001",
            FirstName = "Maria",
            MiddleName = "Lim",
            LastName = "Santos",
            BirthDate = new DateOnly(1988, 4, 12),
            Gender = "Female",
            CivilStatus = "Married",
            Barangay = "Poblacion",
            Address = "Blk 4 Lot 12, Rizal Street, Poblacion",
            ContactNumber = "+63 917 555 0142",
            Email = "maria.santos@example.com",
            Occupation = "Public school teacher",
            VoterClassification = "Registered voter",
            Status = ResidentStatus.Verified,
            RegisteredAt = new DateTimeOffset(2026, 5, 24, 9, 30, 0, TimeSpan.Zero),
            VerificationNotes = "Validated by front desk using barangay certificate and national ID."
        },
        new ResidentDto
        {
            Id = 2,
            ResidentNumber = "RSD-2026-0002",
            FirstName = "Juan",
            MiddleName = "Reyes",
            LastName = "Dela Cruz",
            BirthDate = new DateOnly(1979, 9, 3),
            Gender = "Male",
            CivilStatus = "Married",
            Barangay = "San Isidro",
            Address = "76 Mabini Avenue, San Isidro",
            ContactNumber = "+63 918 555 2104",
            Email = "juan.delacruz@example.com",
            Occupation = "Tricycle operator",
            VoterClassification = "Registered voter",
            Status = ResidentStatus.PendingVerification,
            RegisteredAt = new DateTimeOffset(2026, 5, 28, 13, 15, 0, TimeSpan.Zero),
            VerificationNotes = "Awaiting household confirmation from barangay secretary."
        },
        new ResidentDto
        {
            Id = 3,
            ResidentNumber = "RSD-2026-0003",
            FirstName = "Ana",
            MiddleName = "Garcia",
            LastName = "Reyes",
            BirthDate = new DateOnly(1995, 1, 21),
            Gender = "Female",
            CivilStatus = "Single",
            Barangay = "Mabini",
            Address = "18 Bonifacio Road, Mabini",
            ContactNumber = "+63 919 555 3301",
            Email = "ana.reyes@example.com",
            Occupation = "Microbusiness owner",
            VoterClassification = "Registered voter",
            Status = ResidentStatus.NeedsReview,
            RegisteredAt = new DateTimeOffset(2026, 5, 29, 10, 5, 0, TimeSpan.Zero),
            VerificationNotes = "Duplicate address flag needs reviewer confirmation."
        },
        new ResidentDto
        {
            Id = 4,
            ResidentNumber = "RSD-2026-0004",
            FirstName = "Benjie",
            MiddleName = "Torres",
            LastName = "Aquino",
            BirthDate = new DateOnly(1964, 11, 6),
            Gender = "Male",
            CivilStatus = "Widowed",
            Barangay = "Bagong Silang",
            Address = "Sitio Maligaya, Bagong Silang",
            ContactNumber = "+63 920 555 7810",
            Email = string.Empty,
            Occupation = "Farmer",
            VoterClassification = "Senior citizen voter",
            Status = ResidentStatus.Verified,
            RegisteredAt = new DateTimeOffset(2026, 5, 21, 8, 45, 0, TimeSpan.Zero),
            VerificationNotes = "Senior citizen profile ready for assistance program cross-reference."
        },
        new ResidentDto
        {
            Id = 5,
            ResidentNumber = "RSD-2026-0005",
            FirstName = "Liza",
            MiddleName = "Morales",
            LastName = "Cruz",
            BirthDate = new DateOnly(2001, 7, 18),
            Gender = "Female",
            CivilStatus = "Single",
            Barangay = "Poblacion",
            Address = "Unit 3, Municipal Market Compound, Poblacion",
            ContactNumber = "+63 921 555 9008",
            Email = "liza.cruz@example.com",
            Occupation = "Student",
            VoterClassification = "New voter",
            Status = ResidentStatus.Draft,
            RegisteredAt = new DateTimeOffset(2026, 5, 30, 15, 40, 0, TimeSpan.Zero),
            VerificationNotes = "Draft intake started by kiosk assistant; missing supporting document upload."
        }
    ];

    public Task<IReadOnlyCollection<ResidentDto>> GetResidentsAsync(CancellationToken cancellationToken) =>
        Task.FromResult<IReadOnlyCollection<ResidentDto>>(Residents.ToList());

    public Task<ResidentDto?> GetResidentByIdAsync(int id, CancellationToken cancellationToken) =>
        Task.FromResult(Residents.FirstOrDefault(resident => resident.Id == id));

    public Task<ResidentDto> RegisterResidentAsync(RegisterResidentCommand command, CancellationToken cancellationToken)
    {
        var nextId = Residents.Max(resident => resident.Id) + 1;
        var resident = new ResidentDto
        {
            Id = nextId,
            ResidentNumber = $"RSD-2026-{nextId:0000}",
            FirstName = command.FirstName,
            MiddleName = command.MiddleName,
            LastName = command.LastName,
            BirthDate = command.BirthDate,
            Gender = command.Gender,
            CivilStatus = command.CivilStatus,
            Barangay = command.Barangay,
            Address = command.Address,
            ContactNumber = command.ContactNumber,
            Email = command.Email,
            Occupation = command.Occupation,
            VoterClassification = command.VoterClassification,
            Status = command.Status,
            RegisteredAt = DateTimeOffset.UtcNow,
            VerificationNotes = "Demo registration captured by SmartLGU prototype."
        };

        Residents.Add(resident);

        return Task.FromResult(resident);
    }
}
