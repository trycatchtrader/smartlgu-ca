using SmartLGU.Application.Residents.Dtos;
using SmartLGU.Application.Residents.Services;
using SmartLGU.Domain.Enums;

namespace SmartLGU.Application.Residents.Commands.RegisterResident;

public record RegisterResidentCommand : IRequest<ResidentDto>
{
    public string FirstName { get; init; } = string.Empty;

    public string MiddleName { get; init; } = string.Empty;

    public string LastName { get; init; } = string.Empty;

    public DateOnly BirthDate { get; init; }

    public string Gender { get; init; } = string.Empty;

    public string CivilStatus { get; init; } = string.Empty;

    public string Barangay { get; init; } = string.Empty;

    public string Address { get; init; } = string.Empty;

    public string ContactNumber { get; init; } = string.Empty;

    public string Email { get; init; } = string.Empty;

    public string Occupation { get; init; } = string.Empty;

    public string VoterClassification { get; init; } = string.Empty;

    public ResidentStatus Status { get; init; } = ResidentStatus.PendingVerification;
}

public class RegisterResidentCommandHandler(IResidentDataProvider residentDataProvider) : IRequestHandler<RegisterResidentCommand, ResidentDto>
{
    public Task<ResidentDto> Handle(RegisterResidentCommand request, CancellationToken cancellationToken) =>
        residentDataProvider.RegisterResidentAsync(request, cancellationToken);
}
