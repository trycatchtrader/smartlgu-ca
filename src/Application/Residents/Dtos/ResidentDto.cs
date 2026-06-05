using SmartLGU.Domain.Enums;

namespace SmartLGU.Application.Residents.Dtos;

public class ResidentDto
{
    public int Id { get; init; }

    public string ResidentNumber { get; init; } = string.Empty;

    public string FirstName { get; init; } = string.Empty;

    public string MiddleName { get; init; } = string.Empty;

    public string LastName { get; init; } = string.Empty;

    public string FullName => string.Join(' ', new[] { FirstName, MiddleName, LastName }.Where(value => !string.IsNullOrWhiteSpace(value)));

    public DateOnly BirthDate { get; init; }

    public string Gender { get; init; } = string.Empty;

    public string CivilStatus { get; init; } = string.Empty;

    public string Barangay { get; init; } = string.Empty;

    public string Address { get; init; } = string.Empty;

    public string ContactNumber { get; init; } = string.Empty;

    public string Email { get; init; } = string.Empty;

    public string Occupation { get; init; } = string.Empty;

    public string VoterClassification { get; init; } = string.Empty;

    public ResidentStatus Status { get; init; }

    public DateTimeOffset RegisteredAt { get; init; }

    public string VerificationNotes { get; init; } = string.Empty;
}
