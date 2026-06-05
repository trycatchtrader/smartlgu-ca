namespace SmartLGU.Domain.Entities;

public class Resident : BaseAuditableEntity
{
    public string ResidentNumber { get; set; } = string.Empty;

    public string FirstName { get; set; } = string.Empty;

    public string MiddleName { get; set; } = string.Empty;

    public string LastName { get; set; } = string.Empty;

    public DateOnly BirthDate { get; set; }

    public string Gender { get; set; } = string.Empty;

    public string CivilStatus { get; set; } = string.Empty;

    public string Barangay { get; set; } = string.Empty;

    public string Address { get; set; } = string.Empty;

    public string ContactNumber { get; set; } = string.Empty;

    public string Email { get; set; } = string.Empty;

    public string Occupation { get; set; } = string.Empty;

    public string VoterClassification { get; set; } = string.Empty;

    public ResidentStatus Status { get; set; } = ResidentStatus.PendingVerification;

    public DateTimeOffset RegisteredAt { get; set; }

    public string VerificationNotes { get; set; } = string.Empty;
}
